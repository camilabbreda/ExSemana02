import java.util.Date;
import java.text.SimpleDateFormat;
import java.util.Scanner;
import java.text.ParseException;
import entities.Reservation;

public class Program{
        public static void main(String[] args)  throws ParseException {

        Scanner sc = new Scanner(System.in);
        SimpleDateFormat sdf = new SimpleDateFormat ("dd/MM/yyyy");

        System.out.println("Room number: ");
        int number = sc.nextInt();
        System.out.println("Check-in date (dd/MM/yyy): ");
        Date checkIn =  sdf.parse(sc.next());
        System.out.println("Check-out date (dd/MM/yyyy): ");
        Date checkOut =  sdf.parse(sc.next());

        if(!checkOut.after(checkIn)){
            System.out.println("Error in reservation: Check-out date must be after check-in date");
        }
        else {

            Reservation reservation = new Reservation(number, checkIn, checkOut);
            System.out.println("Reservation: " + reservation.DisplayReservation());

            System.out.println();
            System.out.println("Enter data to update the reservation");
            System.out.println("Check-in date (dd/MM/yyyy): ");
            checkIn =  sdf.parse(sc.next());
            System.out.print("Check-out date (dd/MM/yyyy): ");
            checkOut = sdf.parse(sc.next());
            
            String error = reservation.updateDate(checkIn, checkOut);

            if (error != null) {

                System.out.println("Error in the reservation update: " + error);

            }

            else {

                System.out.println("Reservation: " + reservation.DisplayReservation());

            }
        }
        sc.close();
    }
}