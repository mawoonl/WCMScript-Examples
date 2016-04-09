use("filemanager.js");
print("start");


var time1 = new Date().getTime();

var test = FileManager.scanFiles(FileManager.scanners.METADATA, "F:/test3", 100000, 10);
//var test = FileManager.getFileManagerHandler().getNestedFiles("F:/Feed The Beast/");

var time2 = new Date().getTime();
print("time2: "+(time2-time1));
print("Size2 is: " + test.size());


set = test.keySet();
iterator = set.iterator();
var fm = FileManager.getFileManager();

while(iterator.hasNext()) {
    var x = iterator.next();
    var size = FileManager.getMetaDataValue(test.get(x), "size");
    if(size == "0") {
        fm.delete(FileManager.getPath(x));
        print("Deleted: "+x);
    }
}