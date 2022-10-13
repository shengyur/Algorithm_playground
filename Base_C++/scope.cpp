#include <iostream>
using namespace std;

// 全局变量被定义时 系统会自动初始化
int g = 1;

int main(){
    int a,b;
    int c,d;
    // 局部变量
    a = 10;
    b = 20;
    c = a + b;

    // cout << c;
    cout << d;

    int g = 10;
    // cout << g;

    return 0;
}