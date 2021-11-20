# How to use this cli

### Flags

input file: -i | --input

output file: -o | --output

config file: -c | --config

After flags input and output you need add text with paht to file ("./input.txt").

After flag config you need add cipher.

### Cipher

Caesar cipher: C0 | C1

ROT-8 cipher: R0 | R1

Atbash cipher: A

Flag 0  for dencoding.
Flag 1  for encoding.

## Example

`$ node index -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"`
