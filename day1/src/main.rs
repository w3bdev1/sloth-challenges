use std::collections::HashMap;

fn main() {
    match parse_input() {
        Ok(input) => println!("{:?}", dollar_to_coins(input)),
        Err(message) => println!("{}", message),
    }
}

fn parse_input() -> Result<f32, String> {
    let input = std::env::args().nth(1);

    if let Some(n) = input {
        match n.parse::<f32>() {
            Ok(number) => if number < 0 as f32 {
                Err("Value cannot be negative".to_string())
            } else {
                Ok(number)
            },
            Err(_) => return Err("Provide a valid numeric input".to_string()),
        }
    } else {
        return Err("Provide dollar value as first argument".to_string())
    }
}

fn dollar_to_coins(dollar: f32) -> HashMap<&'static str, i32> {
  let coins_value = [
    ("quarter", 0.25),
    ("dime", 0.10),
    ("nickel", 0.05),
    ("penny", 0.01),
  ];

  let mut coins_required= [
    ("quarter", 0),
    ("dime", 0),
    ("nickel", 0),
    ("penny", 0),
  ].into_iter().collect::<HashMap<_,_>>();

  let mut remaining_input = dollar as f32;

  for (coin, coin_value) in coins_value {
      while remaining_input >= coin_value {
          remaining_input -= coin_value;
          coins_required.insert(coin, coins_required.get(coin).unwrap() + 1);
      }
  }

  return coins_required;
}
