#include<stdio.h>
int main()
{
int a[100],i,j=0,x=0,v,n,b[100],f,k,s=0,c=0;//s refers whether a factor divides any number or not and c referes count of such numbers
printf("enter a number");
scanf("%d",&n);
printf("enter number of friendly numbers");
scanf("%d",&f);
printf("enter friendly numbers");
for(i=0;i<f;i++)
{
  scanf("%d",&b[i]);
}
for(i=1;i<n;i++)
{
  if(n%i == 0)
  {
    if(j!=0 && a[j-1] == i)
    {
      printf("in break");
      break;
    }
    if(n/i == i)
    {
      x=1;
      v=i;
    }
    else
    {
      a[j++] = i;
      a[j++] = n/i;
    }
  }
}

if(x==1)
{
  a[j++]=v;
}

printf("value of j is %d\n",j);
for(i=0;i<j;i++)
{
printf("%d\n",a[i]);
}

for(i=0;i<j;i++)
{
  for(k=0;k<f;k++)
  {
    if(b[k]%a[i]==0)
    {
      s=1;
      break;
    }
  }
  if(s==0)
  {
    c++;
  }
  s=0;
}
printf("\n required number is %d",c);
return 0;
}
