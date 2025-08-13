import { PrismaClient, PromotionType } from '@prisma/client';
const prisma = new PrismaClient();

const categoriesData = [
  {
    name: 'Nhà Cửa - Đời Sống',
    icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png.webp',
  },
  {
    name: 'Điện Thoại - Máy Tính Bảng',
    icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp',
  },
  {
    name: 'Điện tử - Điện lạnh',
    icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/c8/82/d4/64c561c4ced585c74b9c292208e4995a.png.webp',
  },
  {
    name: 'Thời Trang',
    icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png.webp',
  },
  {
    name: 'Làm Đẹp - Sức Khỏe',
    icon: 'https://salt.tikicdn.com/cache/100x100/ts/product/62/d5/9d/6be83773e4836bcbcdaf99a1750b2a28.png.webp',
  },
  {
    name: 'Mẹ & Bé',
    icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp',
  },
  {
    name: 'Giày Dép - Túi Xách',
    icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/d6/7f/6c/5d53b60efb9448b6a1609c825c29fa40.png.webp',
  },
  {
    name: 'Thể Thao - Dã Ngoại',
    icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/0b/5e/3d/00941c9eb338ea62a47d5b1e042843d8.png.webp',
  },
  {
    name: 'Xe & Phụ Kiện',
    icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/69/f5/36/c6cd9e2849854630ed74ff1678db8f19.png.webp',
  },
  {
    name: 'Voucher - Dịch Vụ',
    icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/0a/c9/7b/8e466bdf6d4a5f5e14665ce56e58631d.png.webp',
  },
];

const seed = async () => {
  await prisma.variantInventory.deleteMany();
  await prisma.warehouses.deleteMany();
  await prisma.variantOptionValue.deleteMany();
  await prisma.productVariant.deleteMany();
  await prisma.productOptionValue.deleteMany();
  await prisma.productOption.deleteMany();
  await prisma.productPromotion.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.brand.deleteMany();

  const parentCategory = await prisma.category.create({
    data: {
      name: 'Nhà sách Tiki',
      icon: 'https://salt.tikicdn.com/cache/100x100/ts/category/ed/20/60/afa9b3b474bf7ad70f10dd6443211d5f.png.webp',
      hasChildrens: true,
    },
  });

  for (const item of categoriesData) {
    await prisma.category.create({ data: { ...item, hasChildrens: true } });
  }

  await prisma.category.createMany({
    data: [
      {
        name: 'Sách tiếng Việt',
        parentId: parentCategory.id,
        icon: '',
        hasChildrens: false,
      },
      {
        name: 'Sách ngoại văn',
        parentId: parentCategory.id,
        icon: '',
        hasChildrens: false,
      },
    ],
  });

  const childCategories = await prisma.category.findMany({
    where: { parentId: parentCategory.id },
  });

  const brand = await prisma.brand.create({
    data: {
      name: 'NXB Trẻ',
      title: 'Nhà xuất bản Trẻ',
      logoUrl: 'https://nxbtre.com.vn/Content/images/logo-nxbtre.png',
      isFeatured: true,
    },
  });

  const imageList = [
    {
      title: 'Luật đất đai',
      main: 'https://salt.tikicdn.com/cache/750x750/ts/product/ed/e2/1a/8e5cd0749c89c26a0d23e862d73290ce.jpg.webp',
      extra:
        'https://salt.tikicdn.com/cache/750x750/ts/product/21/8f/b9/02ca403b1e5b2044aff80f04fc648078.jpg.webp',
    },
    {
      title: 'Nguyên tắc cốt lõi hợp tác làm ăn chung',
      main: 'https://salt.tikicdn.com/cache/750x750/ts/product/5f/21/1a/103d3071b125f1bbe74427965c18d3cd.png.webp',
      extra:
        'https://salt.tikicdn.com/cache/750x750/ts/product/47/9a/e8/4d1cc1604ec43c9e8b101ef7e9d4b408.png.webp',
    },
    {
      title: 'Thuyền',
      main: 'https://salt.tikicdn.com/cache/750x750/ts/product/b8/2b/a9/dde7bace0fe9c7138acc6d704887c87a.png.webp',
      extra:
        'https://salt.tikicdn.com/cache/750x750/ts/product/b6/81/d3/60914c2f1933374aed682fff43da7742.jpg.webp',
    },
  ];

  for (const [index, item] of imageList.entries()) {
    const product = await prisma.product.create({
      data: {
        name: item.title,
        description: `Sách: ${item.title} – mô tả chi tiết về nội dung và chất lượng.`,
        brandId: brand.id,
        categoryId: childCategories[index % childCategories.length].id,
        images: {
          create: [
            { imageUrl: item.main, isMain: true, order: 1 },
            { imageUrl: item.extra, isMain: false, order: 2 },
          ],
        },
        promotions: {
          create: {
            type: PromotionType.FLASH_SALE,
            promoPrice: 140000 + index * 20000,
            startAt: new Date(),
            endAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
          },
        },
        productOption: {
          create: [
            {
              name: 'Bìa',
              position: 1,
              values: {
                create: [
                  { value: 'Bìa cứng', position: 1 },
                  { value: 'Bìa mềm', position: 2 },
                ],
              },
            },
            {
              name: 'Ngôn ngữ',
              position: 2,
              values: {
                create: [
                  { value: 'Tiếng Việt', position: 1 },
                  { value: 'Tiếng Anh', position: 2 },
                ],
              },
            },
          ],
        },
      },
      include: { productOption: { include: { values: true } } },
    });

    const [coverHard, coverSoft] = product.productOption[0].values;
    const [langVN, langEN] = product.productOption[1].values;

    const variant1 = await prisma.productVariant.create({
      data: {
        price: '150000',
        sku: `BOOK-${index + 1}-HARD-VN`,
        imageUrl: item.main,
        stock: 20,
        productId: product.id,
        variantOptionValue: {
          create: [
            { optionValueId: coverHard.id },
            { optionValueId: langVN.id },
          ],
        },
      },
    });

    const variant2 = await prisma.productVariant.create({
      data: {
        price: '160000',
        sku: `BOOK-${index + 1}-SOFT-EN`,
        imageUrl: item.extra,
        stock: 15,
        productId: product.id,
        variantOptionValue: {
          create: [
            { optionValueId: coverSoft.id },
            { optionValueId: langEN.id },
          ],
        },
      },
    });

    await prisma.warehouses.create({
      data: {
        name: `Kho Hà Nội`,
        address: 'Số 1 Tràng Tiền',
        city: 'Hà Nội',
        province: 'Hà Nội',
        country: 'Việt Nam',
        createdAt: new Date(),
        updatedAt: new Date(),
        variantInventory: {
          create: [
            {
              variantId: variant1.id,
              stockQuantity: 20,
              updatedAt: new Date(),
            },
            {
              variantId: variant2.id,
              stockQuantity: 15,
              updatedAt: new Date(),
            },
          ],
        },
      },
    });
  }

  console.log(
    'Seeded successfully with product options, variants, and inventory!',
  );
};

seed().catch((err) => {
  console.error('Error seeding:', err);
  process.exit(1);
});
