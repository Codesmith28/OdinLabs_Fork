// Default templates and driver codes for problem creation
export const DEFAULT_CPP_TEMPLATE = `// #include <bits/stdc++.h>
// using namespace std;

// // -----------------------------
// // Basic Linked List Node
// // -----------------------------
// struct ListNode {
//         int val;
//         ListNode *next;
//         ListNode(int x) : val(x), next(nullptr) {
//         }
// };

// // -----------------------------
// // Basic Binary Tree Node
// // -----------------------------
// struct TreeNode {
//         int val;
//         TreeNode *left;
//         TreeNode *right;
//         TreeNode(int x) : val(x), left(nullptr), right(nullptr) {
//         }
// };

class Solution {
public:
    void solve( ) {
        // Write your code here
    }
};

// int main( ) {
//         Solution sol = Solution();
//         sol.solve();
//         return 0;
// }
`;

export const DEFAULT_CPP_DRIVER = `#include <bits/stdc++.h>
using namespace std;

// -----------------------------
// Basic Linked List Node
// -----------------------------
// struct ListNode {
//         int val;
//         ListNode *next;
//         ListNode(int x) : val(x), next(nullptr) {
//         }
// };

// -----------------------------
// Basic Binary Tree Node
// -----------------------------
// struct TreeNode {
//         int val;
//         TreeNode *left;
//         TreeNode *right;
//         TreeNode(int x) : val(x), left(nullptr), right(nullptr) {
//         }
// };

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
`;

export const DEFAULT_JAVA_TEMPLATE = `
// import java.util.*;

// // -----------------------------
// // Basic Linked List Node
// // -----------------------------
// class ListNode {
//     int val;
//     ListNode next;
//     ListNode(int x) { val = x; next = null; }
// }

// // -----------------------------
// // Basic Binary Tree Node
// // -----------------------------
// class TreeNode {
//     int val;
//     TreeNode left;
//     TreeNode right;
//     TreeNode(int x) { val = x; left = right = null; }
// }

class Solution {
    public void solve() {
        // Write your code here
        System.out.println("Hello, World!");
    }
}

// public class Main {
//     public static void main(String[] args) {
//         Solution sol = new Solution();
//         sol.solve();
//     }
// }
`;

export const DEFAULT_JAVA_DRIVER = `import java.util.*;

// -----------------------------
// Basic Linked List Node
// -----------------------------
// class ListNode {
//     int val;
//     ListNode next;
//     ListNode(int x) {
//         val = x;
//         next = null;
//     }
// }

// -----------------------------
// Basic Binary Tree Node
// -----------------------------
// class TreeNode {
//     int val;
//     TreeNode left;
//     TreeNode right;
//     TreeNode(int x) {
//         val = x;
//         left = right = null;
//     }
// }

// class Solution {
//     public void solve() { }
// }

public class Main {
    public static void main(String[] args) {
        Solution sol = new Solution();
        sol.solve();
    }
}
`;

export const DEFAULT_PYTHON_TEMPLATE = `# # -----------------------------
# # Basic Linked List Node
# # -----------------------------
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

# # -----------------------------
# # Basic Binary Tree Node
# # -----------------------------
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def solve(self):
        # Write your code here
        print("Hello, World!")


# DO NOT REMOVE THIS:
main()
# if __name__ == "__main__":
#     sol = Solution()
#     sol.solve()
`;

export const DEFAULT_PYTHON_DRIVER = `# -----------------------------
# Basic Linked List Node
# -----------------------------
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# -----------------------------
# Basic Binary Tree Node
# -----------------------------
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:  # type: ignore[reportRedeclaration]
    def solve(self):
        pass


def main():
    sol = Solution()
    sol.solve()
`;
