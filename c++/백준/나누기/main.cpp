#include <iostream>

using namespace std;
int N, F;

int cal()
{
        int start = (N / 100) * 100;
        int result;

        for (int i = start; i < (start + 100); i++)
        if (i % F == 0)
        {
        result = i % 100;
        break;
        return result;
        }
}
int main(){
    int result = cal();
        if (0 <= result && result < 10)
        {
            cout << "0";
        }
        cout << result << endl;

        return 0;

}
