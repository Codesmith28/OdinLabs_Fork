#include <bits/stdc++.h>
using namespace std;

// -----------------------------
// Basic Linked List Node
// -----------------------------
struct ListNode {
        int val;
        ListNode *next;
        ListNode(int x) : val(x), next(nullptr) {
        }
};

// -----------------------------
// Basic Binary Tree Node
// -----------------------------
struct TreeNode {
        int val;
        TreeNode *left;
        TreeNode *right;
        TreeNode(int x) : val(x), left(nullptr), right(nullptr) {
        }
};

// class Solution {
// public:
//     void solve( ) {
//         // Write your code here
//     }
// };

int main( ) {
        Solution sol = Solution();
        sol.solve();
        return 0;
}
