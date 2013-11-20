package org.apache.cordova.echo;

import java.util.TimeZone;

import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.LOG;
import org.apache.cordova.CordovaInterface;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

//import android.content.Context;
//import android.content.Intent;
//import android.content.IntentFilter;
//import android.provider.Settings;
//import android.telephony.TelephonyManager;

public class Echo extends CordovaPlugin {
    public static final String TAG = "Echo";

    //public static String cordovaVersion = "dev";              // Cordova version
    //public static String platform = "Android";                  // Echo OS
    //public static String uuid;                                  // Echo UUID

    //BroadcastReceiver telephonyReceiver = null;

    public Echo() {
    }

    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if (action.equals("echo")) {
            JSONObject arg_object = args.getJSONObject(0);
            //arg_object.getString("title")
            JSONObject r = new JSONObject();
            r.put("test", arg_object.getString("theVal"));
            r.put("test2", "hello");
            callbackContext.success(r);
        }
        else {
            return false;
        }
        return true;
    }
 
}
