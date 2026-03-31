let hierarchyList = xhr.responseJSON.result.MT_HIER;

if (!modelInit.getProperty("/showHistory")) {
    hierarchyList = hierarchyList.map((hierarchy) => {
        hierarchy.HISTICONSHOW = false;
        return hierarchy;
    });
}

const treeData = neptune.Utils.convertFlatToNested(hierarchyList, "KEY", "PARENT");
modeloTreeTable.setData({
    children: treeData,
});

oPage.setTitle(`Search Equipment (${hierarchyList.length})`);
oApp.setBusy(false);