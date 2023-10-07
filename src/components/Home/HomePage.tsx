import Button from '@/components/ui/Button';
import MainButton from '@/components/ui/MainButton';


const HomePage = () => {
  return (
    <>
      <div>
        <Button label="Primary Button" type="primary" />
        <Button label="Secondary Button" type="secondary" />
        <Button label="Large Button" size="large" />
        <MainButton label="GET TICKETS" type="get-tickets"/>
      </div>
      <div className="text-6xl uppercase">
        <h1 className="font-londrina">Londrina</h1>
      </div>
    </>
  );
};

export default HomePage;
