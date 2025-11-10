import java.util.*;

// -----------------------------
// Basic Linked List Node
// -----------------------------
class ListNode {
    int val;
    ListNode next;
    ListNode(int x) {
        val = x;
        next = null;
    }
}

// -----------------------------
// Basic Binary Tree Node
// -----------------------------
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) {
        val = x;
        left = right = null;
    }
}

// class Solution {
//     public void solve() { }
// }

public class Main {
    public static void main(String[] args) {
        Solution sol = new Solution();
        sol.solve();
    }
}
