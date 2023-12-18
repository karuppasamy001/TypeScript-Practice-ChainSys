type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';

const getSizeDescription = (size: Size): string => {
    switch (size) {
        case 'S':
            return 'Small';
        case 'M':
            return 'Medium';
        case 'L':
            return 'Large';
        case 'XL':
            return 'Extra Large';
        case 'XXL':
            return 'Double Extra Large';
        case 'XXXL':
            return 'Triple Extra Large';
        default:
            return 'Invalid Size';
    }
};

const size_1: Size = 'XL';
const size_2: Size = 'M';

// Display person sizes using the function
console.log("Person 1 Size is: " + getSizeDescription(size_1));
console.log("Person 2 Size is: " + getSizeDescription(size_2));
