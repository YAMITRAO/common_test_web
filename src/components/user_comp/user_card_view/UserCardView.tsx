import "./ReuleauxTriangle.css"; // Custom CSS for the Reuleaux Triangle shape

const ReuleauxTriangleImage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="relative w-64 h-64">
        <img
          className="object-cover w-full h-full reuleaux-mask"
          src="https://via.placeholder.com/300"
          alt="Example Image"
        />
      </div>
    </div>
  );
};

export default ReuleauxTriangleImage;
