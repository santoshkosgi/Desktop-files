# Enter your code here. Read input from STDIN. Print output to STDOUT
s=gets
n=gets
n=Integer(n)
a= Array.new
for i in 0..n
    a[i]=gets
end
min=0
max=0
t=0
k=0
words = s.split(/\W+/)
words.each do |i|
    if i === a[0]
        min = k
        max = k
    end
    k=k+1
end
a.each do |j|
    words.each do |i|
        if min == 0 && max ==0
            if i === a[0]
                min = k
                max = k
            end
        else
            if j===i

        k=k+1
    end

