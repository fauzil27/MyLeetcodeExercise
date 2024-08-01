function Palindrome(x: number) {
  let palindrome = [];
  palindrome.push(String(x));
  let reversed = [];
  for (let i = 0; i < palindrome.length; i++) {
    let reverse = "";
    for (let j = palindrome[i].length - 1; j >= 0; j--) {
      reverse += palindrome[i][j];
    }
    reversed.push(reverse);

    return palindrome[i] === reversed[i];
  }
}
