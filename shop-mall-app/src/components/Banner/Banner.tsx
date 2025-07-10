import type {FC} from 'react'

export const Banner: FC = () => {
  return (
    <div className="mb-6">
      <img
        src="https://via.placeholder.com/1200x300"
        alt="Banner"
        className="w-full h-64 object-cover rounded"
      />
    </div>
  );
};