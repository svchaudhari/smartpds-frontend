import { FC } from 'react';
import './LoginCard.css';
import { useNavigate } from 'react-router';
import { ChevronRight } from '../LogoComponents';

interface LoginCard {
  title: string;
  description: string;
  navigateTo: string;
}

const LoginCard: FC<LoginCard> = ({
  title,
  description,
  navigateTo
}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(navigateTo);
  }

  return (
    <section className="card-container-wrapper ">
      <div className="card-content" onClick={handleClick}>
        <div className="text-content">
          <header>
            <span>{title}</span>
          </header>
          <p>
            <strong>Note:</strong> {description}
          </p>
        </div>
        <div className="card-icon">
          <ChevronRight/>
        </div>
      </div>
    </section>
  );
};

export default LoginCard;
