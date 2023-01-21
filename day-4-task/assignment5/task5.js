// Write a program to find the largest of three given integers.

function largest_of_three_num(x,y,z) {
    largest_no = 0;
    if(x>y && x>z ){
        largest_no = x;
    }else if( y>x && y> z){
        largest_no = y;
    }else{
        largest_no = z;
    }
    return largest_no;
}

console.log(largest_of_three_num(1,2,3));

console.log(largest_of_three_num(4,6,1));

console.log(largest_of_three_num(8,2,1));