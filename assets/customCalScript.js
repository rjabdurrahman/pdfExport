event.target.hidden = (this.getField("N.1001").value=="" && this.getField("N.1005").value=="" && this.getField("N.1009").value=="" && this.getField("N.1013").value=="" && this.getField("N.1017").value=="" && this.getField("N.1021").value=="" && this.getField("N.1025").value=="");

/** BVCALC N\.1001+N\.1005+N\.1009+N\.1013+N\.1017+N\.1021+N\.1025 EVCALC **/event.value=AFMakeNumber(getField("N.1001").value)+AFMakeNumber(getField("N.1005").value)+AFMakeNumber(getField("N.1009").value)+AFMakeNumber(getField("N.1013").value)+AFMakeNumber(getField("N.1017").value)+AFMakeNumber(getField("N.1021").value)+AFMakeNumber(getField("N.1025").value)


/** BVCALC N\.1001+N\.1005+N\.1009+N\.1013+N\.1017+N\.1021+N\.1025 EVCALC **/event.value=AFMakeNumber(getField("N.1001").value)+AFMakeNumber(getField("N.1005").value)+AFMakeNumber(getField("N.1009").value)+AFMakeNumber(getField("N.1013").value)+AFMakeNumber(getField("N.1017").value)+AFMakeNumber(getField("N.1021").value)+AFMakeNumber(getField("N.1025").value)
/** BVCALC N\.1002+N\.1006+N\.1010+N\.1014+N\.1018+N\.1022+N\.1026 EVCALC **/event.value=AFMakeNumber(getField("N.1002").value)+AFMakeNumber(getField("N.1006").value)+AFMakeNumber(getField("N.1010").value)+AFMakeNumber(getField("N.1014").value)+AFMakeNumber(getField("N.1018").value)+AFMakeNumber(getField("N.1022").value)+AFMakeNumber(getField("N.1026").value)
/** BVCALC N\.1003+N\.1007+N\.1011+N\.1015+N\.1019+N\.1023+N\.1027 EVCALC **/event.value=AFMakeNumber(getField("N.1003").value)+AFMakeNumber(getField("N.1007").value)+AFMakeNumber(getField("N.1011").value)+AFMakeNumber(getField("N.1015").value)+AFMakeNumber(getField("N.1019").value)+AFMakeNumber(getField("N.1023").value)+AFMakeNumber(getField("N.1027").value)
/** BVCALC N\.1004+N\.1008+N\.1012+N\.1016+N\.1020+N\.1024+N\.1028 EVCALC **/event.value=AFMakeNumber(getField("N.1004").value)+AFMakeNumber(getField("N.1008").value)+AFMakeNumber(getField("N.1012").value)+AFMakeNumber(getField("N.1016").value)+AFMakeNumber(getField("N.1020").value)+AFMakeNumber(getField("N.1024").value)+AFMakeNumber(getField("N.1028").value)

/** BVCALC N\.0903+N\.0907+N\.0911+N\.0915+N\.0919 EVCALC **/event.value=AFMakeNumber(getField("N.0903").value)+AFMakeNumber(getField("N.0907").value)+AFMakeNumber(getField("N.0911").value)+AFMakeNumber(getField("N.0915").value)+AFMakeNumber(getField("N.0919").value)
/** BVCALC N\.0903+N\.0907+N\.0911+N\.0915+N\.0919 EVCALC **/event.value=AFMakeNumber(getField("N.0904").value)+AFMakeNumber(getField("N.0908").value)+AFMakeNumber(getField("N.0912").value)+AFMakeNumber(getField("N.0916").value)+AFMakeNumber(getField("N.0920").value)
/** BVCALC N\.0903+N\.0907+N\.0911+N\.0915+N\.0919 EVCALC **/event.value=AFMakeNumber(getField("N.0905").value)+AFMakeNumber(getField("N.0909").value)+AFMakeNumber(getField("N.0913").value)+AFMakeNumber(getField("N.0917").value)+AFMakeNumber(getField("N.0921").value)
/** BVCALC N\.0903+N\.0907+N\.0911+N\.0915+N\.0919 EVCALC **/event.value=AFMakeNumber(getField("N.0906").value)+AFMakeNumber(getField("N.0910").value)+AFMakeNumber(getField("N.0914").value)+AFMakeNumber(getField("N.0918").value)+AFMakeNumber(getField("N.0922").value)

if(AFMakeNumber(getField("T.1551a").value) > AFMakeNumber(getField("N.1552").value)) {
    event.value = AFMakeNumber(getField("T.1551a").value)
}
else {
    event.value = AFMakeNumber(getField("N.1552").value)
}
