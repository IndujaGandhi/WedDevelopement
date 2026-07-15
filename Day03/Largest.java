import java.util.*;
public class Largest{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of array:");
        int size = sc.nextInt();
        int[] arr = new int[size];

        for(int i=0; i<size; i++){
            System.out.println("Enter"+i+"element:");
            arr[i] = sc.nextInt();
        }

        int largest=0;
        for(int i=0;  i<size; i++){
            if(arr[i]>largest){
                largest=arr[i];
            }
        }
        System.out.println("Largest element in the array:"+largest);
    }
}
