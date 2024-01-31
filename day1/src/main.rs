fn main() {
    match parse_input() {
        Ok(input) => println!("{:?}", input),
        Err(message) => println!("{}", message),
    }
}

fn parse_input() -> Result<usize, String> {
    let input = std::env::args().nth(1);

    if let Some(n) = input {
        match n.parse::<usize>() {
            Ok(number) => return Ok(number),
            Err(_) => return Err("Provide a valid and positive numeric input".to_string()),
        }
    } else {
        return Err("Provide dollar value as first argument".to_string())
    }
}

