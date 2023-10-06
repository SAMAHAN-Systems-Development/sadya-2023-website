import Button from '@/components/ui/Button';

const HomePage = () => {
  return (
    <>
      <div>
        <Button label="Primary Button" type="primary" />
        <Button label="Secondary Button" type="secondary" />
        <Button label="Large Button" size="large" />
      </div>
      <div className="text-6xl uppercase">
        <h1 className="font-londrina">Londrina</h1>
      </div>
    </>
  );
};

export default HomePage;
