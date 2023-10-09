
const Options = () => {

  const  Options = [
        {
          "id": 1,
          "name": "Bronze Membership",
          "features": [
            "Access to cardio and strength training equipment",
            "Locker room access",
            "Fitness classes (limited)",
            "No contract commitment",
            "Monthly fitness assessment"
          ],
          "price": "$29.99 per month"
        },
        {
          "id": 2,
          "name": "Silver Membership",
          "features": [
            "Full access to all gym facilities 24/7",
            "Personal training session (1 per month)",
            "Locker with combination lock",
            "Access to swimming pool",
            "Discounts on fitness supplements"
          ],
          "price": "$49.99 per month"
        },
        {
          "id": 3,
          "name": "Gold Membership",
          "features": [
            "Unlimited access to all gym facilities",
            "Unlimited fitness classes",
            "Free access to sauna and spa",
            "Nutrition consultation",
            "Flexible contract options",
            "Complimentary guest passes (2 per month)",
            "Priority booking for fitness classes"
          ],
          "price": "$79.99 per month"
        },
        {
          "id": 4,
          "name": "Student Membership",
          "features": [
            "Access to cardio and strength training equipment",
            "Locker room access",
            "Fitness classes (limited)",
            "Student ID required",
            "No contract commitment"
          ],
          "price": "$19.99 per month"
        }
      ]

    return (
        <div>
            
            {
                Options.map(PriceOption => <PriceOption key={PriceOption.id} PriceOption={PriceOption}></PriceOption> )
            } 
        </div>
    );
};

export default Options;