const BreadCrumbs = ({ path }: { path: string[] }) => {
  return (
    <div className="text-sm text-gray-600">
      {path.map((crumb, index) => (
        <span key={index}>
          {crumb}
          {index < path.length - 1 && ' > '}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumbs;
