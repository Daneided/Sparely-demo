import React from "react";

const [currentStep, setCurrentStep] = useState(1);
const [selectedCharity, setSelectedCharity] = useState(null);
const [totalAmount, setTotalAmount] = useState(0); // Set this from the order total
const [donationAmount, setDonationAmount] = useState(0);

switch (currentStep) {
  case 1:
    return <CharitySelection onNext={goToNextStep} />;
  case 2:
    return (
      <DonationSuggestion
        totalAmount={totalAmount}
        onSetDonation={setDonationAmount}
        onNext={goToNextStep}
      />
    );
  case 3:
    return (
      <ThankYou
        selectedCharity={selectedCharity}
        donationAmount={donationAmount}
      />
    );
  default:
    return <div>Unknown step</div>;
}
