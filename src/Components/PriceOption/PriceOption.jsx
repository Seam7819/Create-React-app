import PropTypes from 'prop-types'; // ES6


const PriceOption = ({PriceOption}) => {
    console.log(PriceOption)
    return (
        <div>
            <h2 className="text-4xl font-extrabold mt-5 ml-5">Best Price Options</h2>
            <div>
                <h2>
                    
                </h2>
            </div>
        </div>
    );
};
PriceOption.propTypes = {
    PriceOption : PropTypes.object
}
export default PriceOption;