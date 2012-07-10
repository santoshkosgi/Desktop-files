

 a=Array.new
 i=0
 b=0
 c=[2,3,4,5,6,7,8,9]
 d=5000
 (1...5000).each do |x|
    if 5000%x==0
      b=5000/x
      if a[i-1]==x then
        puts "inside break"
        break
      end
    puts x
    a[i]=x
    i=i+1
    a[i]=b
    i=i+1
    end
 end

 puts "array is#{a}"
 puts "array is#{c}"
