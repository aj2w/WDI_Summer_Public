# Done in JS? Now do it in Ruby.

i = 1

until i == 101
  if (i % 15 == 0)
    puts "Fizzbuzz"
    i += 1
  elsif (i % 5 == 0)
    puts "Buzz"
    i += 1
  elsif (i % 3 == 0)
    puts "Fizz"
    i += 1
  else
    puts i
    i += 1
  end
end