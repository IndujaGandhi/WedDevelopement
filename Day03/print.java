import java.util.*;
public class print{
    public static void main(){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter no of rows:");
        int row =  sc.nextInt();
        System.out.println("Enter no of columns:");
        int col = sc.nextInt();

        int[][] arr =new int [row][col];

        for(int i=0; i<row ; i++){
            for(int j=0; j<col ; j++){
                System.out.println("Enter the element:");
                arr[i][j] = sc.nextInt();
            }
        }
        
        System.out.println("2D array");
        for(int i =0 ; i<row ; i++){
            for(int j=0; j<col ; j++){
                System.out.printf(arr[i][j] + "\t");
            }
            System.out.println();
        }
    }
}