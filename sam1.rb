a= Array.new
j=0,x=0,v=0,s=0,c=0
z= gets.split(" ")
b = gets.split(" ")
y=z[1]
(1...y).each do |i|
  if(z[1]%i == 0)
    if(j!=0 && a[j-1] == i)
      break
    end
    if(z[1]/i == i)
      x=1
      v=i
    else
      a[j] = i
      j=j+1
      a[j] = z[1]/i
      j=j+1
    end
  end
end

if(x==1)
  a[j]=v
  j=j+1
end
puts "array is#{a}"
