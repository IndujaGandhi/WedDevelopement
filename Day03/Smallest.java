import java.util.*;
public class Smallest{
    public static void main(String [] args ){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter no of row:");
        int row = sc.nextInt();
        System.out.println("Enter no of columns:");
        int col = sc.nextInt();

        int[][] arr = new int[row][col];
        for(int i=0; i<row; i++){
            for(int j=0; j<col; j++){
                System.out.println("Enter the element:");
                arr[i][j] = sc.nextInt();
            }
        }

        int small=arr[0][0];
        for(int i=0; i<row; i++){
            for(int j=0; j<col; j++){
                if(arr[i][j]<small){
                    small = arr[i][j];
                }
            }
        }
        System.out.println("The Smallest element in the array :"+small);
    }
}