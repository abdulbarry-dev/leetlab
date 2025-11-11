struct Solution;

impl Solution {
    pub fn plus_one(digits: Vec<i32>) -> Vec<i32> {
        let mut result = digits.clone();
        let mut carry = 1;
        
        for i in (0..result.len()).rev() {
            let sum = result[i] + carry;
            result[i] = sum % 10;
            carry = sum / 10;
            
            if carry == 0 {
                break;
            }
        }
        
        if carry > 0 {
            result.insert(0, carry);
        }
        
        result
    }
}

fn main() {
    // Test cases
    let test1 = vec![1, 2, 3];
    println!("Input: {:?}", test1);
    println!("Output: {:?}", Solution::plus_one(test1));
    println!();
    
    let test2 = vec![4, 3, 2, 1];
    println!("Input: {:?}", test2);
    println!("Output: {:?}", Solution::plus_one(test2));
    println!();
    
    let test3 = vec![9, 9, 9];
    println!("Input: {:?}", test3);
    println!("Output: {:?}", Solution::plus_one(test3));
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_plus_one() {
        assert_eq!(Solution::plus_one(vec![1, 2, 3]), vec![1, 2, 4]);
        assert_eq!(Solution::plus_one(vec![4, 3, 2, 1]), vec![4, 3, 2, 2]);
        assert_eq!(Solution::plus_one(vec![9]), vec![1, 0]);
        assert_eq!(Solution::plus_one(vec![9, 9, 9]), vec![1, 0, 0, 0]);
    }
}