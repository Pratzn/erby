package hello.service;

import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.stream.Collectors;

@Component
public class ImageService {
    
    private static String[] db_sample = {"bg-01.jpg", "bg-02.jpg", "bg-03.jpg", "bg-04.jpg", "bg-05.jpg", "bg-06.jpg", "bg-07.jpg"};

    public String[] getImageString(){
return db_sample;
//        return Arrays.asList(db_sample).stream()
//                .map( n -> n.toString() )
//                .collect( Collectors.joining( "','" ) );
    }
    
}
