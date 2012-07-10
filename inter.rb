a= Array.new
j=0,x=0,v=0,k=0,s=0,c=0,i=0
z= gets.split(" ")
b = gets.split(" ")
z.collect! {|i| i.to_i}
b.collect! {|i| i.to_i}
i=1
while i<z[1] do
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
  i=i+1
end

if(x==1)
  a[j]=v
  j=j+1
end
i=0
while i<j do
  while k<z[0] do
    if(b[k]%a[i]==0)
      s=1
      break
    end
    k=k+1
  end
    s=0
  i=i+1
end
puts c
