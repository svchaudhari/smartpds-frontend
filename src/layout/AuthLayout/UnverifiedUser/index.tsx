import { Outlet } from 'react-router';
import "./UnverifiedUser.css";
import { Images } from '../../../assets';
import { Carousel } from 'react-responsive-carousel';
import CarouselCard from '../../../components/Carousel/Card';

const UnverifiedUser = () => {
  return (
    <div className="unverified-user-container">
      <div className="unverified-user-content-container">
        <div className="left">
          <div className="government-institution">
            <img src={Images.IndiaEmblemWIthMinistry} alt="India" />
          </div>
          <div className="bottom-container">
            <h2 className="National-Food-Security-moto">
              <p>National Food Security</p>
              <p>
                <strong className="text-style-1">My ration - My Rights</strong>
              </p>
            </h2>
            <div className="carousal-container">
              <div className="carousal-content-container">
                <Carousel
                  autoPlay={true}
                  infiniteLoop
                  // emulateTouch
                  // showThumbs
                  showStatus={false}
                  stopOnHover
                  // useKeyboardArrows
                >
                  {Array(5)
                    .fill('')
                    .map((t) => (
                      <CarouselCard
                        title={'Food Supply Details'}
                        num={'4532234'}
                        percentage={'12'}
                        subtitle="compared to last year"
                        isIncreased={true}
                      />
                    ))}
                </Carousel>
                <div className="moto">
                  <strong>
                    <i>FOOD FOR ALL, NUTRITION FOR ALL</i>
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UnverifiedUser;