import LoginCard from '../../components/LoginCard';
import './Login.css';
import GoBack from '../../components/GoBack';
import loginCardsData from '../../data/JSON/loginCards.json';

const Login = () => {
  const { loginHeading, loginDescription, cards } = loginCardsData;
  const pages = loginCardsData.pages;

  return (
    <section>
      <GoBack />
      <div className="container">
        <h2 className="container-heading">{loginHeading}</h2>
        <p className="container-description">{loginDescription}</p>
        <div className="card-container">
          {cards.map((card, index) => (
            <LoginCard
              key={index}
              title={card.title}
              description={card.description}
              navigateTo={`/login/${pages[index].id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Login;
