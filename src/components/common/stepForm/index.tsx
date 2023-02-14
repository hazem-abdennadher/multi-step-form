type StepFormProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};
const FormStep: React.FC<StepFormProps> = ({
  title,
  children,
  description,
}) => {
  return (
    <div className="bg-white flex flex-col py-8 px-4 items-start gap-8 rounded-lg ml-4 mr-4 ">
      <header className="flex flex-col items-start gap-2">
        <h1 className="text-2xl font-bold text-primary-marineBlue">{title}</h1>
        <p className="text-md text-neutral-coolGray w-[80%]">{description}</p>
      </header>
      {children}
    </div>
  );
};

export default FormStep;
