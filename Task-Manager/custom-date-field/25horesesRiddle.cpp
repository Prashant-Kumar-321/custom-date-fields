#include<iostream>
#include<tuple>
#include<vector>
#include<algorithm>
using namespace std; 

vector<int> getTop3H(vector<int>& hrs, int s, int e){
    vector<int> tem; 
    while(s <= e){
        tem.push_back(hrs[s++]); 
    }

    sort(tem.begin(), tem.end(), greater<int>()); 

    vector<int> ans; 
    const int its = (tem.size() >= 3) ? 3 : tem.size(); 
    for(int i=0; i< its; ++i){
        ans.push_back(tem[i]); 
    }

    return ans; 
}

vector<int> getTopHorses(vector<int>& horses){
    vector<int> winHorses;
    int lastIdx = horses.size()-1;  
    int s = 0, e = 4; 
    if(horses.size() < 5){
        e = lastIdx; 
    }

    while(s <= lastIdx) {
        auto ans = getTop3H(horses, s, e);

        // Assign the winner horses
        for(auto e: ans){
            winHorses.push_back(e); 
        }   
        s += 5; 
        e += 5; 
        if(e > lastIdx){
            e = lastIdx;  
        }
    }

    return winHorses; 
}



int main(){
    vector<int> horses(10); 
    for(int i=1; i<= horses.size(); ++i){
        horses.at(i-1) = i*3; 
    }

    while(horses.size() > 3){
        horses = getTopHorses(horses); // Top horses of that round 
    }

    for(auto h: horses){
        cout<< h<< endl; 
    }
    return 0; 
}