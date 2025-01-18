import './DetailsContentContainer.css';
interface DetailsContentContainerProps {
  readonly key?: string;
  readonly property: string;
  readonly value: string;
}
const DetailsContentContainer: React.FC<DetailsContentContainerProps> = ({
  property,
  value,
}) => {
  return (
    <>
      <div className="details-content-container">
        <p className="property">{property}</p>
        <p className="value">{value}</p>
      </div>
    </>
  );
};

export default DetailsContentContainer;
