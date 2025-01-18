import { useState } from 'react';
import { useNavigate } from 'react-router';

const Accordion = ({
  sections,
  setCurrentTitle,
}: {
  sections: {
    [key: string]: {
      url: string;
      values: Array<{
        name: string;
        url: string;
        children?: Array<{ name: string; url: string; children?: any }>;
      }>;
    };
  };
  setCurrentTitle: (title: string) => void;
}) => {
  const navigate = useNavigate();
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleNavigate = (url: string, name: string) => {
    if (url) {
      navigate(`/${url}`);
      setCurrentTitle(name);
    }
  };

  const renderSections = (
    items: Array<{
      name: string;
      url: string;
      children?: Array<{ name: string; url: string; children?: any }>;
    }>
  ) => {
    return items.map((item) => (
      <div key={item.name} className="ml-4">
        <button
          onClick={() =>
            item.children
              ? toggleSection(item.name)
              : handleNavigate(item.url, item.name)
          }
          className="block w-full text-left p-2 border-b flex justify-between items-center"
        >
          {item.name}
          {item.children && <span>{openSections[item.name] ? '-' : '+'}</span>}
        </button>
        {item.children && openSections[item.name] && (
          <div className="ml-4">{renderSections(item.children)}</div>
        )}
      </div>
    ));
  };

  return (
    <aside className="h-screen p-4 shadow-200">
      {Object.entries(sections).map(([key, value]) => (
        <div key={key}>
          <button
            onClick={() => toggleSection(key)}
            className="w-full text-left font-bold text-lg p-2 border-b flex justify-between items-center"
          >
            {key}
            <span>{openSections[key] ? '-' : '+'}</span>
          </button>
          {openSections[key] && (
            <div className="ml-4">{renderSections(value.values)}</div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default Accordion;
