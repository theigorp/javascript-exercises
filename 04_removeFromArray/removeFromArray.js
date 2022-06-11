const removeFromArray = function(array, ...nums) 
{
    for(let countArgs = 0; countArgs < nums.length; countArgs++)
        {
            if(array.includes(nums[countArgs])===true)
            {
                let index = array.indexOf(nums[countArgs]);
                array.splice(index, 1);
            }
        }

        return array;
};

// Do not edit below this line
module.exports = removeFromArray;
