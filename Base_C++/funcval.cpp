#include <iostream>
using namespace std;
// 函数定义
void swap(int &x,int &y)
{
    int temp;
    // 保存地址 x  的值
    temp = x;
    // 赋值
    x = y;
    y = temp;
}

// 函数声明
void swap(int &x,int &y);

int main()
{
    int a = 100;
    int b = 200;

    cout << "交换前，a 的值：" << a << endl;
    cout << "交换前，b 的值：" << b << endl;
 
    // 调用函数来交换值
    // &a 表示指向a的指针 即 a 的地址
    // &b 表示指向b的指针 即 b 的地址
    swap(a, b);
    
    cout << "交换后，a 的值：" << a << endl;
    cout << "交换后，b 的值：" << b << endl;
    
    return 0;
}