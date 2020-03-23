package rushali.JUnitTesting;

import static org.junit.Assert.*;

import org.junit.Test;

public class RemoveAInFirstTwoChars {
/*
 * To Do List
 * 1."ABCD" => "BCD"    =>success
 * 2."AACD" => "CD"     =>success
 * 3."BACD" => "BCD"    =>success
 * 4."BBAA" => "BBAA"   =>success
 * 5."AABAA" => "BAA"   =>success
 * 
 * ALL TEST CASES SUCCESSFULLY RUN!
 */
	RemoveAFromFirstTwoChars removea = new RemoveAFromFirstTwoChars();
	@Test
	public void test1() {
		
//		RemoveAFromFirstTwoChars removea = new RemoveAFromFirstTwoChars();
//		String result=removea.remove("ABCD");
//		assertEquals("BCD",result);
		
		//After refactoring
		
		assertEquals("BCD",removea.remove("ABCD"));
	}
	@Test
	public void test2() {
		
//		RemoveAFromFirstTwoChars removea = new RemoveAFromFirstTwoChars();
//		String result=removea.remove("AACD");
		
		assertEquals("CD",removea.remove("AACD"));
	}
	@Test
	public void test3() {
		
//		RemoveAFromFirstTwoChars removea = new RemoveAFromFirstTwoChars();
//		String result=removea.remove("BACD");
		
		assertEquals("BCD",removea.remove("BACD"));
	}
	@Test
	public void test4() {
		
//		RemoveAFromFirstTwoChars removea = new RemoveAFromFirstTwoChars();
//		String result=removea.remove("BBAA");
		
		assertEquals("BBAA",removea.remove("BBAA"));
	}
	@Test
	public void test5() {
		
//		RemoveAFromFirstTwoChars removea = new RemoveAFromFirstTwoChars();
//		String result=removea.remove("AABAA");
		
		assertEquals("BAA",removea.remove("AABAA"));
	}

}
