package com.teamfisk.backend_app.helpers;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.client.j2se.MatrixToImageConfig;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

import java.io.ByteArrayOutputStream;

public class ZXingHelper {
    public static byte[] getQRCodeImage(String text,int width,int height) {
        try {
            QRCodeWriter qrCodeWriter = new QRCodeWriter();
            BitMatrix bitMatrix = qrCodeWriter.encode(text, BarcodeFormat.QR_CODE,width,height);
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            MatrixToImageConfig con = new MatrixToImageConfig( 0xFF000002 , 0xFFFFC041 ) ;
            MatrixToImageWriter.writeToStream(bitMatrix,"png",byteArrayOutputStream,con);
            return byteArrayOutputStream.toByteArray();
        }catch (Exception e){
            return null;
        }
    }
}
