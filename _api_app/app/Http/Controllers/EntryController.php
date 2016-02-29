<?php

namespace App\Http\Controllers;

use App\Entries;
use Illuminate\Http\Request;

class EntryController extends Controller {
    public function update(Request $request) {
        $json = $request->json()->all();
        $path_arr = explode('/', $json['path']);
        $site = $path_arr[0];
        $section = $path_arr[1];
        $entries = new Entries($site, $section);

        $res = $entries->saveValueByPath($json['path'], $json['value']);
        // @@@:TODO: Replace this with something sensible, when migration to redux is done
        $res['update'] = $res['value'];
        $res['real'] = $res['value'];
        // @@@:TODO:END

        return response()->json($res);
    }

    public function galleryOrder(Request $request) {
        $json = $request->json()->all();
        $entries = new Entries($json['site'], $json['section']);
        $ret = $entries->galleryOrder($json['entry'], $json['files']);
        return response()->json($ret);
    }
}
