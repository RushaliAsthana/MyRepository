package rushali.JUnitTesting;
import java.util.*;
public class RemoveAFromFirstTwoChars {

	public String remove(String teststring) {
		String result="";
		for(int i=0;i<teststring.length();i++)
		{
			if(teststring.charAt(i)=='A' && i<=1)
			continue;
			
			result=result+String.valueOf(teststring.charAt(i));
		}
		
		return result;
	}

}
