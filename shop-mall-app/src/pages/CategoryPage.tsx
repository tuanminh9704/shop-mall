import type { FC } from "react";
import { SubCategory } from "../components/Category/SubCategory";

export const CategoryPage : FC = () => {
    console.log("OK");
    return (
        <div>
            <div>
                <aside>
                    <SubCategory />
                </aside>
            </div>
        </div>
    )

}