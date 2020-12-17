/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define((function(){"use strict";let r;const o={values:[1,.3048,.3048006096012192,.3047972654,.9143917962,.201166195164,.9143984146160287,.3047994715386762,20.11676512155263,20.11678249437587,.9143985307444408,.91439523,.3047997101815088,20.116756,5e4,15e4],units:["Meter","Foot","Foot_US","Foot_Clarke","Yard_Clarke","Link_Clarke","Yard_Sears","Foot_Sears","Chain_Sears","Chain_Benoit_1895_B","Yard_Indian","Yard_Indian_1937","Foot_Gold_Coast","Chain_Sears_1922_Truncated","50_Kilometers","150_Kilometers"],2066:5,2136:12,2155:2,2157:0,2158:0,2159:12,2160:12,2204:2,2219:0,2220:0,2254:2,2255:2,2256:1,2265:1,2266:1,2267:2,2268:2,2269:1,2270:1,2271:2,2272:2,2273:1,2294:0,2295:0,2314:3,2899:2,2900:2,2901:1,2909:1,2910:1,2911:2,2912:2,2913:1,2914:1,2992:1,2993:0,2994:1,3080:1,3089:2,3090:0,3091:2,3102:2,3141:0,3142:0,3167:13,3359:2,3360:0,3361:1,3362:0,3363:2,3364:0,3365:2,3366:3,3404:2,3405:0,3406:0,3407:3,3439:0,3440:0,3479:1,3480:0,3481:1,3482:0,3483:1,3484:0,3485:2,3486:0,3487:2,3488:0,3489:0,3490:2,3491:0,3492:2,3493:0,3494:2,3495:0,3496:2,3497:0,3498:2,3499:0,3500:2,3501:0,3502:2,3503:0,3504:2,3505:0,3506:2,3507:0,3508:2,3509:0,3510:2,3511:0,3512:2,3513:0,3514:0,3515:2,3516:0,3517:2,3518:0,3519:2,3520:0,3521:2,3522:0,3523:2,3524:0,3525:2,3526:0,3527:2,3528:0,3529:2,3530:0,3531:2,3532:0,3533:2,3534:0,3535:2,3536:0,3537:2,3538:0,3539:2,3540:0,3541:2,3542:0,3543:2,3544:0,3545:2,3546:0,3547:2,3548:0,3549:2,3550:0,3551:2,3552:0,3553:2,3582:2,3583:0,3584:2,3585:0,3586:2,3587:0,3588:1,3589:0,3590:1,3591:0,3592:0,3593:1,3598:2,3599:0,3600:2,3605:1,3606:0,3607:0,3608:2,3609:0,3610:2,3611:0,3612:2,3613:0,3614:2,3615:0,3616:2,3617:0,3618:2,3619:0,3620:2,3621:0,3622:2,3623:0,3624:2,3625:0,3626:2,3627:0,3628:2,3629:0,3630:2,3631:0,3632:2,3633:0,3634:1,3635:0,3636:1,3640:2,3641:0,3642:2,3643:0,3644:1,3645:0,3646:1,3647:0,3648:1,3649:0,3650:2,3651:0,3652:2,3653:0,3654:2,3655:0,3656:1,3657:0,3658:2,3659:0,3660:2,3661:0,3662:2,3663:0,3664:2,3668:2,3669:0,3670:2,3671:0,3672:2,3673:0,3674:2,3675:0,3676:1,3677:2,3678:0,3679:1,3680:2,3681:0,3682:1,3683:2,3684:0,3685:0,3686:2,3687:0,3688:2,3689:0,3690:2,3691:0,3692:2,3696:2,3697:0,3698:2,3699:0,3700:2,3793:0,3794:0,3812:0,3854:0,3857:0,3920:0,3978:0,3979:0,3991:2,3992:2,4026:0,4037:0,4038:0,4071:0,4082:0,4083:0,4087:0,4088:0,4217:2,4414:0,4415:0,4417:0,4434:0,4437:0,4438:2,4439:2,4462:0,4467:0,4471:0,4474:0,4559:0,4647:0,4822:0,4826:0,4839:0,5018:0,5048:0,5167:0,5168:0,5221:0,5223:0,5234:0,5235:0,5243:0,5247:0,5266:0,5316:0,5320:0,5321:0,5325:0,5337:0,5361:0,5362:0,5367:0,5382:0,5383:0,5396:0,5456:0,5457:0,5469:0,5472:4,5490:0,5513:0,5514:0,5523:0,5559:0,5588:1,5589:3,5596:0,5627:0,5629:0,5641:0,5643:0,5644:0,5646:2,5654:2,5655:2,5659:0,5700:0,5825:0,5836:0,5837:0,5839:0,5842:0,5844:0,5858:0,5879:0,5880:0,5887:0,5890:0,6128:1,6129:1,6141:1,6204:0,6210:0,6211:0,6307:0,6312:0,6316:0,6362:0,6391:1,6405:1,6406:0,6407:1,6408:0,6409:1,6410:0,6411:2,6412:0,6413:2,6414:0,6415:0,6416:2,6417:0,6418:2,6419:0,6420:2,6421:0,6422:2,6423:0,6424:2,6425:0,6426:2,6427:0,6428:2,6429:0,6430:2,6431:0,6432:2,6433:0,6434:2,6435:0,6436:2,6437:0,6438:2,6439:0,6440:0,6441:2,6442:0,6443:2,6444:0,6445:2,6446:0,6447:2,6448:0,6449:2,6450:0,6451:2,6452:0,6453:2,6454:0,6455:2,6456:0,6457:2,6458:0,6459:2,6460:0,6461:2,6462:0,6463:2,6464:0,6465:2,6466:0,6467:2,6468:0,6469:2,6470:0,6471:2,6472:0,6473:2,6474:0,6475:2,6476:0,6477:2,6478:0,6479:2,6484:2,6485:0,6486:2,6487:0,6488:2,6489:0,6490:2,6491:0,6492:2,6493:0,6494:1,6495:0,6496:1,6497:0,6498:0,6499:1,6500:0,6501:2,6502:0,6503:2,6504:0,6505:2,6506:0,6507:2,6508:0,6509:0,6510:2,6515:1,6516:0,6518:0,6519:2,6520:0,6521:2,6522:0,6523:2,6524:0,6525:2,6526:0,6527:2,6528:0,6529:2,6530:0,6531:2,6532:0,6533:2,6534:0,6535:2,6536:0,6537:2,6538:0,6539:2,6540:0,6541:2,6542:0,6543:2,6544:0,6545:1,6546:0,6547:1,6548:0,6549:2,6550:0,6551:2,6552:0,6553:2,6554:0,6555:2,6556:0,6557:1,6558:0,6559:1,6560:0,6561:1,6562:0,6563:2,6564:0,6565:2,6566:0,6567:0,6568:2,6569:0,6570:1,6571:0,6572:2,6573:0,6574:2,6575:0,6576:2,6577:0,6578:2,6582:2,6583:0,6584:2,6585:0,6586:2,6587:0,6588:2,6589:0,6590:2,6591:0,6592:0,6593:2,6594:0,6595:2,6596:0,6597:2,6598:0,6599:2,6600:0,6601:2,6602:0,6603:2,6605:2,6606:0,6607:2,6608:0,6609:2,6610:0,6611:0,6612:2,6613:0,6614:2,6615:0,6616:2,6617:0,6618:2,6633:2,6646:0,6703:0,6784:0,6785:1,6786:0,6787:1,6788:0,6789:1,6790:0,6791:1,6792:0,6793:1,6794:0,6795:1,6796:0,6797:1,6798:0,6799:1,6800:0,6801:1,6802:0,6803:1,6804:0,6805:1,6806:0,6807:1,6808:0,6809:1,6810:0,6811:1,6812:0,6813:1,6814:0,6815:1,6816:0,6817:1,6818:0,6819:1,6820:0,6821:1,6822:0,6823:1,6824:0,6825:1,6826:0,6827:1,6828:0,6829:1,6830:0,6831:1,6832:0,6833:1,6834:0,6835:1,6836:0,6837:1,6838:0,6839:1,6840:0,6841:1,6842:0,6843:1,6844:0,6845:1,6846:0,6847:1,6848:0,6849:1,6850:0,6851:1,6852:0,6853:1,6854:0,6855:1,6856:0,6857:1,6858:0,6859:1,6860:0,6861:1,6862:0,6863:1,6867:0,6868:1,6870:0,6875:0,6876:0,6879:0,6880:2,6884:0,6885:1,6886:0,6887:1,6915:0,6922:0,6923:2,6924:0,6925:2,6962:0,6984:0,6991:0,7128:2,7131:0,7132:2,7142:0,7257:0,7258:2,7259:0,7260:2,7261:0,7262:2,7263:0,7264:2,7265:0,7266:2,7267:0,7268:2,7269:0,7270:2,7271:0,7272:2,7273:0,7274:2,7275:0,7276:2,7277:0,7278:2,7279:0,7280:2,7281:0,7282:2,7283:0,7284:2,7285:0,7286:2,7287:0,7288:2,7289:0,7290:2,7291:0,7292:2,7293:0,7294:2,7295:0,7296:2,7297:0,7298:2,7299:0,7300:2,7301:0,7302:2,7303:0,7304:2,7305:0,7306:2,7307:0,7308:2,7309:0,7310:2,7311:0,7312:2,7313:0,7314:2,7315:0,7316:2,7317:0,7318:2,7319:0,7320:2,7321:0,7322:2,7323:0,7324:2,7325:0,7326:2,7327:0,7328:2,7329:0,7330:2,7331:0,7332:2,7333:0,7334:2,7335:0,7336:2,7337:0,7338:2,7339:0,7340:2,7341:0,7342:2,7343:0,7344:2,7345:0,7346:2,7347:0,7348:2,7349:0,7350:2,7351:0,7352:2,7353:0,7354:2,7355:0,7356:2,7357:0,7358:2,7359:0,7360:2,7361:0,7362:2,7363:0,7364:2,7365:0,7366:2,7367:0,7368:2,7369:0,7370:2,7877:0,7878:0,7882:0,7883:0,7887:0,7899:0,7991:0,7992:0,8035:2,8036:2,8058:0,8059:0,8082:0,8083:0,8088:0,8090:0,8091:2,8092:0,8093:2,8095:0,8096:2,8097:0,8098:2,8099:0,8100:2,8101:0,8102:2,8103:0,8104:2,8105:0,8106:2,8107:0,8108:2,8109:0,8110:2,8111:0,8112:2,8113:0,8114:2,8115:0,8116:2,8117:0,8118:2,8119:0,8120:2,8121:0,8122:2,8123:0,8124:2,8125:0,8126:2,8127:0,8128:2,8129:0,8130:2,8131:0,8132:2,8133:0,8134:2,8135:0,8136:2,8137:0,8138:2,8139:0,8140:2,8141:0,8142:2,8143:0,8144:2,8145:0,8146:2,8147:0,8148:2,8149:0,8150:2,8151:0,8152:2,8153:0,8154:2,8155:0,8156:2,8157:0,8158:2,8159:0,8160:2,8161:0,8162:2,8163:0,8164:2,8165:0,8166:2,8167:0,8168:2,8169:0,8170:2,8171:0,8172:2,8173:0,8177:2,8179:0,8180:2,8181:0,8182:2,8184:0,8185:2,8187:0,8189:2,8191:0,8193:2,8196:0,8197:2,8198:0,8200:2,8201:0,8202:2,8203:0,8204:2,8205:0,8206:2,8207:0,8208:2,8209:0,8210:2,8212:0,8213:2,8214:0,8216:2,8218:0,8220:2,8222:0,8224:2,8225:0,8226:2,8311:0,8312:1,8313:0,8314:1,8315:0,8316:1,8317:0,8318:1,8319:0,8320:1,8321:0,8322:1,8323:0,8324:1,8325:0,8326:1,8327:0,8328:1,8329:0,8330:1,8331:0,8332:1,8333:0,8334:1,8335:0,8336:1,8337:0,8338:1,8339:0,8340:1,8341:0,8342:1,8343:0,8344:1,8345:0,8346:1,8347:0,8348:1,8352:0,8353:0,8379:0,8380:2,8381:0,8382:2,8383:0,8384:2,8385:0,8387:2,8391:0,8395:0,8433:0,8441:0,8455:0,8456:0,8531:2,8682:0,8686:0,8687:0,8692:0,8693:0,8826:0,8903:0,8950:0,8951:0,9039:0,9040:0,9141:0,9149:0,9150:0,9191:0,9221:0,9222:0,9249:0,9250:0,9252:0,9254:0,9265:0,9284:0,9285:0,9367:0,20499:0,20538:0,20539:0,20790:0,20791:0,21291:0,21292:0,21500:0,21817:0,21818:0,22032:0,22033:0,22091:0,22092:0,22332:0,22391:0,22392:0,22700:0,22770:0,22780:0,22832:0,23090:0,23095:0,23239:0,23240:0,23433:0,23700:0,24047:0,24048:0,24100:3,24200:0,24305:0,24306:0,24382:10,24383:0,24500:0,24547:0,24548:0,24571:9,24600:0,25e3:0,25231:0,25884:0,25932:0,26237:0,26331:0,26332:0,26432:0,26591:0,26592:0,26632:0,26692:0,27120:0,27200:0,27291:6,27292:6,27429:0,27492:0,27493:0,27500:0,27700:0,28232:0,28600:0,28991:0,28992:0,29100:0,29101:0,29220:0,29221:0,29333:0,29635:0,29636:0,29701:0,29738:0,29739:0,29849:0,29850:0,29871:8,29872:7,29873:0,30200:5,30339:0,30340:0,30591:0,30592:0,30791:0,30792:0,30800:0,31028:0,31121:0,31154:0,31170:0,31171:0,31370:0,31528:0,31529:0,31600:0,31700:0,31838:0,31839:0,31900:0,31901:0,32061:0,32062:0,32098:0,32099:2,32100:0,32104:0,32161:0,32766:0,53048:0,53049:0,54090:0,54091:0,65061:2,65062:2,65161:0,65163:0,102041:2,102064:11,102068:14,102069:15,102118:2,102119:1,102120:2,102121:2,102217:2,102218:0,102219:2,102220:2,102378:1,102379:1,102380:0,102381:1,102589:2,102599:2,102600:2,102604:2,102647:0,102704:2,102705:2,102706:0,102761:2,102762:0,102763:2,102764:0,102765:0,102766:2,102962:0,102963:0,102970:1,102974:2,102993:0,102994:0,102995:2,102996:2,103015:0,103016:2,103017:0,103018:2,103025:0,103026:0,103027:2,103028:2,103035:0,103036:0,103037:2,103038:2,103039:0,103040:0,103041:2,103042:2,103043:0,103044:0,103045:2,103046:2,103047:0,103048:0,103049:2,103050:2,103051:0,103052:2,103053:0,103054:2,103055:0,103056:2,103057:0,103058:0,103059:2,103060:2,103061:0,103062:0,103063:2,103064:2,103069:2,103070:0,103071:0,103072:2,103073:2,103086:0,103087:0,103088:2,103089:2,103094:1,103095:0,103096:2,103103:0,103104:2,103105:0,103106:2,103121:0,103122:2,103123:0,103124:0,103125:1,103126:1,103127:0,103128:0,103129:2,103130:2,103131:0,103132:0,103133:2,103134:2,103135:0,103136:0,103137:1,103138:1,103139:0,103140:2,103141:0,103142:2,103143:0,103144:2,103145:0,103146:1,103147:0,103148:0,103149:2,103150:2,103151:0,103152:2,103172:0,103173:2,103174:0,103175:0,103176:2,103177:2,103178:0,103179:0,103180:2,103181:2,103182:0,103183:0,103184:2,103185:2,103228:0,103229:0,103230:2,103231:2,103250:0,103251:2,103252:0,103253:2,103260:0,103261:0,103262:2,103263:2,103270:0,103271:0,103272:2,103273:2,103274:0,103275:0,103276:2,103277:2,103278:0,103279:0,103280:2,103281:2,103282:0,103283:0,103284:2,103285:2,103286:0,103287:2,103288:0,103289:2,103290:0,103291:2,103292:0,103293:0,103294:2,103295:2,103296:0,103297:0,103298:2,103299:2,103376:2,103377:0,103378:0,103379:2,103380:2,103393:0,103394:0,103395:2,103396:2,103472:0,103473:1,103474:0,103475:2,103482:0,103483:2,103484:0,103485:2,103500:0,103501:2,103502:0,103503:0,103504:1,103505:1,103506:0,103507:0,103508:2,103509:2,103510:0,103511:0,103512:2,103513:2,103514:0,103515:2,103516:0,103517:2,103518:0,103519:2,103520:0,103521:1,103522:0,103523:0,103524:2,103525:2,103526:0,103527:2,103561:2,103562:2,103563:0,103564:0,103565:2,103566:2,103567:0,103568:0,103569:2,103570:2,103584:0,103585:2,103586:0,103587:2,103588:1,103589:0,103590:2,103591:1,103592:0,103593:2,103594:1,103695:2};for(r=2e3;r<=2045;r++)o[r]=0;for(r=2056;r<=2065;r++)o[r]=0;for(r=2067;r<=2135;r++)o[r]=0;for(r=2137;r<=2154;r++)o[r]=0;for(r=2161;r<=2170;r++)o[r]=0;for(r=2172;r<=2193;r++)o[r]=0;for(r=2195;r<=2198;r++)o[r]=0;for(r=2200;r<=2203;r++)o[r]=0;for(r=2205;r<=2217;r++)o[r]=0;for(r=2222;r<=2224;r++)o[r]=1;for(r=2225;r<=2250;r++)o[r]=2;for(r=2251;r<=2253;r++)o[r]=1;for(r=2257;r<=2264;r++)o[r]=2;for(r=2274;r<=2279;r++)o[r]=2;for(r=2280;r<=2282;r++)o[r]=1;for(r=2283;r<=2289;r++)o[r]=2;for(r=2290;r<=2292;r++)o[r]=0;for(r=2308;r<=2313;r++)o[r]=0;for(r=2315;r<=2491;r++)o[r]=0;for(r=2494;r<=2866;r++)o[r]=0;for(r=2867;r<=2869;r++)o[r]=1;for(r=2870;r<=2888;r++)o[r]=2;for(r=2891;r<=2895;r++)o[r]=2;for(r=2896;r<=2898;r++)o[r]=1;for(r=2902;r<=2908;r++)o[r]=2;for(r=2915;r<=2920;r++)o[r]=2;for(r=2921;r<=2923;r++)o[r]=1;for(r=2924;r<=2930;r++)o[r]=2;for(r=2931;r<=2962;r++)o[r]=0;for(r=2964;r<=2968;r++)o[r]=2;for(r=2969;r<=2973;r++)o[r]=0;for(r=2975;r<=2991;r++)o[r]=0;for(r=2995;r<=3051;r++)o[r]=0;for(r=3054;r<=3079;r++)o[r]=0;for(r=3081;r<=3088;r++)o[r]=0;for(r=3092;r<=3101;r++)o[r]=0;for(r=3106;r<=3138;r++)o[r]=0;for(r=3146;r<=3151;r++)o[r]=0;for(r=3153;r<=3166;r++)o[r]=0;for(r=3168;r<=3172;r++)o[r]=0;for(r=3174;r<=3203;r++)o[r]=0;for(r=3294;r<=3358;r++)o[r]=0;for(r=3367;r<=3403;r++)o[r]=0;for(r=3408;r<=3416;r++)o[r]=0;for(r=3417;r<=3438;r++)o[r]=2;for(r=3441;r<=3446;r++)o[r]=2;for(r=3447;r<=3450;r++)o[r]=0;for(r=3451;r<=3459;r++)o[r]=2;for(r=3460;r<=3478;r++)o[r]=0;for(r=3554;r<=3559;r++)o[r]=0;for(r=3560;r<=3570;r++)o[r]=2;for(r=3571;r<=3581;r++)o[r]=0;for(r=3594;r<=3597;r++)o[r]=0;for(r=3601;r<=3604;r++)o[r]=0;for(r=3637;r<=3639;r++)o[r]=0;for(r=3665;r<=3667;r++)o[r]=0;for(r=3693;r<=3695;r++)o[r]=0;for(r=3701;r<=3727;r++)o[r]=0;for(r=3728;r<=3739;r++)o[r]=2;for(r=3740;r<=3751;r++)o[r]=0;for(r=3753;r<=3760;r++)o[r]=2;for(r=3761;r<=3773;r++)o[r]=0;for(r=3775;r<=3777;r++)o[r]=0;for(r=3779;r<=3781;r++)o[r]=0;for(r=3783;r<=3785;r++)o[r]=0;for(r=3788;r<=3791;r++)o[r]=0;for(r=3797;r<=3802;r++)o[r]=0;for(r=3814;r<=3816;r++)o[r]=0;for(r=3825;r<=3829;r++)o[r]=0;for(r=3832;r<=3841;r++)o[r]=0;for(r=3844;r<=3852;r++)o[r]=0;for(r=3873;r<=3885;r++)o[r]=0;for(r=3890;r<=3893;r++)o[r]=0;for(r=3907;r<=3912;r++)o[r]=0;for(r=3942;r<=3950;r++)o[r]=0;for(r=3968;r<=3970;r++)o[r]=0;for(r=3973;r<=3976;r++)o[r]=0;for(r=3986;r<=3989;r++)o[r]=0;for(r=3994;r<=3997;r++)o[r]=0;for(r=4048;r<=4051;r++)o[r]=0;for(r=4056;r<=4063;r++)o[r]=0;for(r=4093;r<=4096;r++)o[r]=0;for(r=4390;r<=4398;r++)o[r]=0;for(r=4399;r<=4413;r++)o[r]=2;for(r=4418;r<=4433;r++)o[r]=2;for(r=4455;r<=4457;r++)o[r]=2;for(r=4484;r<=4489;r++)o[r]=0;for(r=4491;r<=4554;r++)o[r]=0;for(r=4568;r<=4589;r++)o[r]=0;for(r=4652;r<=4656;r++)o[r]=0;for(r=4766;r<=4800;r++)o[r]=0;for(r=5014;r<=5016;r++)o[r]=0;for(r=5069;r<=5072;r++)o[r]=0;for(r=5105;r<=5130;r++)o[r]=0;for(r=5173;r<=5188;r++)o[r]=0;for(r=5253;r<=5259;r++)o[r]=0;for(r=5269;r<=5275;r++)o[r]=0;for(r=5292;r<=5311;r++)o[r]=0;for(r=5329;r<=5331;r++)o[r]=0;for(r=5343;r<=5349;r++)o[r]=0;for(r=5355;r<=5357;r++)o[r]=0;for(r=5387;r<=5389;r++)o[r]=0;for(r=5459;r<=5463;r++)o[r]=0;for(r=5479;r<=5482;r++)o[r]=0;for(r=5518;r<=5520;r++)o[r]=0;for(r=5530;r<=5539;r++)o[r]=0;for(r=5550;r<=5552;r++)o[r]=0;for(r=5562;r<=5583;r++)o[r]=0;for(r=5623;r<=5625;r++)o[r]=2;for(r=5631;r<=5639;r++)o[r]=0;for(r=5649;r<=5653;r++)o[r]=0;for(r=5663;r<=5680;r++)o[r]=0;for(r=5682;r<=5685;r++)o[r]=0;for(r=5875;r<=5877;r++)o[r]=0;for(r=5896;r<=5899;r++)o[r]=0;for(r=5921;r<=5940;r++)o[r]=0;for(r=6050;r<=6125;r++)o[r]=0;for(r=6244;r<=6275;r++)o[r]=0;for(r=6328;r<=6348;r++)o[r]=0;for(r=6350;r<=6356;r++)o[r]=0;for(r=6366;r<=6372;r++)o[r]=0;for(r=6381;r<=6387;r++)o[r]=0;for(r=6393;r<=6404;r++)o[r]=0;for(r=6480;r<=6483;r++)o[r]=0;for(r=6511;r<=6514;r++)o[r]=0;for(r=6579;r<=6581;r++)o[r]=0;for(r=6619;r<=6624;r++)o[r]=0;for(r=6625;r<=6627;r++)o[r]=2;for(r=6628;r<=6632;r++)o[r]=0;for(r=6634;r<=6637;r++)o[r]=0;for(r=6669;r<=6692;r++)o[r]=0;for(r=6707;r<=6709;r++)o[r]=0;for(r=6720;r<=6723;r++)o[r]=0;for(r=6732;r<=6738;r++)o[r]=0;for(r=6931;r<=6933;r++)o[r]=0;for(r=6956;r<=6959;r++)o[r]=0;for(r=7005;r<=7007;r++)o[r]=0;for(r=7057;r<=7070;r++)o[r]=2;for(r=7074;r<=7082;r++)o[r]=0;for(r=7109;r<=7118;r++)o[r]=0;for(r=7119;r<=7127;r++)o[r]=1;for(r=7374;r<=7376;r++)o[r]=0;for(r=7528;r<=7586;r++)o[r]=0;for(r=7587;r<=7645;r++)o[r]=2;for(r=7692;r<=7696;r++)o[r]=0;for(r=7755;r<=7787;r++)o[r]=0;for(r=7791;r<=7795;r++)o[r]=0;for(r=7799;r<=7801;r++)o[r]=0;for(r=7803;r<=7805;r++)o[r]=0;for(r=7825;r<=7831;r++)o[r]=0;for(r=7845;r<=7859;r++)o[r]=0;for(r=8013;r<=8032;r++)o[r]=0;for(r=8065;r<=8068;r++)o[r]=1;for(r=8518;r<=8529;r++)o[r]=2;for(r=8533;r<=8536;r++)o[r]=2;for(r=8538;r<=8540;r++)o[r]=2;for(r=8677;r<=8679;r++)o[r]=0;for(r=8836;r<=8840;r++)o[r]=0;for(r=8857;r<=8859;r++)o[r]=0;for(r=8908;r<=8910;r++)o[r]=0;for(r=9154;r<=9159;r++)o[r]=0;for(r=9205;r<=9218;r++)o[r]=0;for(r=9271;r<=9273;r++)o[r]=0;for(r=9295;r<=9297;r++)o[r]=0;for(r=20002;r<=20032;r++)o[r]=0;for(r=20062;r<=20092;r++)o[r]=0;for(r=20135;r<=20138;r++)o[r]=0;for(r=20248;r<=20258;r++)o[r]=0;for(r=20348;r<=20358;r++)o[r]=0;for(r=20436;r<=20440;r++)o[r]=0;for(r=20822;r<=20824;r++)o[r]=0;for(r=20934;r<=20936;r++)o[r]=0;for(r=21035;r<=21037;r++)o[r]=0;for(r=21095;r<=21097;r++)o[r]=0;for(r=21148;r<=21150;r++)o[r]=0;for(r=21413;r<=21423;r++)o[r]=0;for(r=21453;r<=21463;r++)o[r]=0;for(r=21473;r<=21483;r++)o[r]=0;for(r=21780;r<=21782;r++)o[r]=0;for(r=21891;r<=21894;r++)o[r]=0;for(r=21896;r<=21899;r++)o[r]=0;for(r=22171;r<=22177;r++)o[r]=0;for(r=22181;r<=22187;r++)o[r]=0;for(r=22191;r<=22197;r++)o[r]=0;for(r=22234;r<=22236;r++)o[r]=0;for(r=22521;r<=22525;r++)o[r]=0;for(r=22991;r<=22994;r++)o[r]=0;for(r=23028;r<=23038;r++)o[r]=0;for(r=23830;r<=23853;r++)o[r]=0;for(r=23866;r<=23872;r++)o[r]=0;for(r=23877;r<=23884;r++)o[r]=0;for(r=23886;r<=23894;r++)o[r]=0;for(r=23946;r<=23948;r++)o[r]=0;for(r=24311;r<=24313;r++)o[r]=0;for(r=24342;r<=24347;r++)o[r]=0;for(r=24370;r<=24374;r++)o[r]=10;for(r=24375;r<=24381;r++)o[r]=0;for(r=24718;r<=24721;r++)o[r]=0;for(r=24817;r<=24821;r++)o[r]=0;for(r=24877;r<=24882;r++)o[r]=0;for(r=24891;r<=24893;r++)o[r]=0;for(r=25391;r<=25395;r++)o[r]=0;for(r=25828;r<=25838;r++)o[r]=0;for(r=26191;r<=26195;r++)o[r]=0;for(r=26391;r<=26393;r++)o[r]=0;for(r=26701;r<=26722;r++)o[r]=0;for(r=26729;r<=26799;r++)o[r]=2;for(r=26801;r<=26803;r++)o[r]=2;for(r=26811;r<=26813;r++)o[r]=2;for(r=26847;r<=26870;r++)o[r]=2;for(r=26891;r<=26899;r++)o[r]=0;for(r=26901;r<=26923;r++)o[r]=0;for(r=26929;r<=26946;r++)o[r]=0;for(r=26948;r<=26998;r++)o[r]=0;for(r=27037;r<=27040;r++)o[r]=0;for(r=27205;r<=27232;r++)o[r]=0;for(r=27258;r<=27260;r++)o[r]=0;for(r=27391;r<=27398;r++)o[r]=0;for(r=27561;r<=27564;r++)o[r]=0;for(r=27571;r<=27574;r++)o[r]=0;for(r=27581;r<=27584;r++)o[r]=0;for(r=27591;r<=27594;r++)o[r]=0;for(r=28191;r<=28193;r++)o[r]=0;for(r=28348;r<=28358;r++)o[r]=0;for(r=28402;r<=28432;r++)o[r]=0;for(r=28462;r<=28492;r++)o[r]=0;for(r=29118;r<=29122;r++)o[r]=0;for(r=29168;r<=29172;r++)o[r]=0;for(r=29177;r<=29185;r++)o[r]=0;for(r=29187;r<=29195;r++)o[r]=0;for(r=29900;r<=29903;r++)o[r]=0;for(r=30161;r<=30179;r++)o[r]=0;for(r=30491;r<=30494;r++)o[r]=0;for(r=30729;r<=30732;r++)o[r]=0;for(r=31251;r<=31259;r++)o[r]=0;for(r=31265;r<=31268;r++)o[r]=0;for(r=31275;r<=31279;r++)o[r]=0;for(r=31281;r<=31297;r++)o[r]=0;for(r=31461;r<=31469;r++)o[r]=0;for(r=31491;r<=31495;r++)o[r]=0;for(r=31917;r<=31922;r++)o[r]=0;for(r=31965;r<=32e3;r++)o[r]=0;for(r=32001;r<=32003;r++)o[r]=2;for(r=32005;r<=32031;r++)o[r]=2;for(r=32033;r<=32060;r++)o[r]=2;for(r=32064;r<=32067;r++)o[r]=2;for(r=32074;r<=32077;r++)o[r]=2;for(r=32081;r<=32086;r++)o[r]=0;for(r=32107;r<=32130;r++)o[r]=0;for(r=32133;r<=32158;r++)o[r]=0;for(r=32164;r<=32167;r++)o[r]=2;for(r=32180;r<=32199;r++)o[r]=0;for(r=32201;r<=32260;r++)o[r]=0;for(r=32301;r<=32360;r++)o[r]=0;for(r=32601;r<=32662;r++)o[r]=0;for(r=32664;r<=32667;r++)o[r]=2;for(r=32701;r<=32761;r++)o[r]=0;for(r=53001;r<=53004;r++)o[r]=0;for(r=53008;r<=53019;r++)o[r]=0;for(r=53021;r<=53032;r++)o[r]=0;for(r=53034;r<=53037;r++)o[r]=0;for(r=53042;r<=53046;r++)o[r]=0;for(r=53074;r<=53080;r++)o[r]=0;for(r=54001;r<=54004;r++)o[r]=0;for(r=54008;r<=54019;r++)o[r]=0;for(r=54021;r<=54032;r++)o[r]=0;for(r=54034;r<=54037;r++)o[r]=0;for(r=54042;r<=54046;r++)o[r]=0;for(r=54048;r<=54053;r++)o[r]=0;for(r=54074;r<=54080;r++)o[r]=0;for(r=54098;r<=54101;r++)o[r]=0;for(r=102001;r<=102040;r++)o[r]=0;for(r=102042;r<=102063;r++)o[r]=0;for(r=102065;r<=102067;r++)o[r]=0;for(r=102070;r<=102117;r++)o[r]=0;for(r=102122;r<=102216;r++)o[r]=0;for(r=102221;r<=102377;r++)o[r]=0;for(r=102382;r<=102388;r++)o[r]=0;for(r=102389;r<=102398;r++)o[r]=2;for(r=102399;r<=102444;r++)o[r]=0;for(r=102445;r<=102447;r++)o[r]=2;for(r=102448;r<=102458;r++)o[r]=0;for(r=102459;r<=102468;r++)o[r]=2;for(r=102469;r<=102499;r++)o[r]=0;for(r=102500;r<=102519;r++)o[r]=1;for(r=102520;r<=102524;r++)o[r]=0;for(r=102525;r<=102529;r++)o[r]=2;for(r=102530;r<=102588;r++)o[r]=0;for(r=102590;r<=102598;r++)o[r]=0;for(r=102601;r<=102603;r++)o[r]=0;for(r=102605;r<=102628;r++)o[r]=0;for(r=102629;r<=102646;r++)o[r]=2;for(r=102648;r<=102700;r++)o[r]=2;for(r=102701;r<=102703;r++)o[r]=0;for(r=102707;r<=102730;r++)o[r]=2;for(r=102733;r<=102758;r++)o[r]=2;for(r=102767;r<=102900;r++)o[r]=0;for(r=102965;r<=102969;r++)o[r]=0;for(r=102971;r<=102973;r++)o[r]=0;for(r=102975;r<=102989;r++)o[r]=0;for(r=102990;r<=102992;r++)o[r]=1;for(r=102997;r<=103002;r++)o[r]=0;for(r=103003;r<=103008;r++)o[r]=2;for(r=103009;r<=103011;r++)o[r]=0;for(r=103012;r<=103014;r++)o[r]=2;for(r=103019;r<=103021;r++)o[r]=0;for(r=103022;r<=103024;r++)o[r]=2;for(r=103029;r<=103031;r++)o[r]=0;for(r=103032;r<=103034;r++)o[r]=2;for(r=103065;r<=103068;r++)o[r]=0;for(r=103074;r<=103076;r++)o[r]=0;for(r=103077;r<=103079;r++)o[r]=1;for(r=103080;r<=103082;r++)o[r]=0;for(r=103083;r<=103085;r++)o[r]=2;for(r=103090;r<=103093;r++)o[r]=0;for(r=103097;r<=103099;r++)o[r]=0;for(r=103100;r<=103102;r++)o[r]=2;for(r=103107;r<=103109;r++)o[r]=0;for(r=103110;r<=103112;r++)o[r]=2;for(r=103113;r<=103116;r++)o[r]=0;for(r=103117;r<=103120;r++)o[r]=2;for(r=103153;r<=103157;r++)o[r]=0;for(r=103158;r<=103162;r++)o[r]=2;for(r=103163;r<=103165;r++)o[r]=0;for(r=103166;r<=103168;r++)o[r]=1;for(r=103169;r<=103171;r++)o[r]=2;for(r=103186;r<=103188;r++)o[r]=0;for(r=103189;r<=103191;r++)o[r]=2;for(r=103192;r<=103195;r++)o[r]=0;for(r=103196;r<=103199;r++)o[r]=2;for(r=103200;r<=103224;r++)o[r]=0;for(r=103225;r<=103227;r++)o[r]=1;for(r=103232;r<=103237;r++)o[r]=0;for(r=103238;r<=103243;r++)o[r]=2;for(r=103244;r<=103246;r++)o[r]=0;for(r=103247;r<=103249;r++)o[r]=2;for(r=103254;r<=103256;r++)o[r]=0;for(r=103257;r<=103259;r++)o[r]=2;for(r=103264;r<=103266;r++)o[r]=0;for(r=103267;r<=103269;r++)o[r]=2;for(r=103300;r<=103375;r++)o[r]=0;for(r=103381;r<=103383;r++)o[r]=0;for(r=103384;r<=103386;r++)o[r]=1;for(r=103387;r<=103389;r++)o[r]=0;for(r=103390;r<=103392;r++)o[r]=2;for(r=103397;r<=103399;r++)o[r]=0;for(r=103400;r<=103471;r++)o[r]=2;for(r=103476;r<=103478;r++)o[r]=0;for(r=103479;r<=103481;r++)o[r]=2;for(r=103486;r<=103488;r++)o[r]=0;for(r=103489;r<=103491;r++)o[r]=2;for(r=103492;r<=103495;r++)o[r]=0;for(r=103496;r<=103499;r++)o[r]=2;for(r=103528;r<=103543;r++)o[r]=0;for(r=103544;r<=103548;r++)o[r]=2;for(r=103549;r<=103551;r++)o[r]=0;for(r=103552;r<=103554;r++)o[r]=1;for(r=103555;r<=103557;r++)o[r]=2;for(r=103558;r<=103560;r++)o[r]=0;for(r=103571;r<=103573;r++)o[r]=0;for(r=103574;r<=103576;r++)o[r]=2;for(r=103577;r<=103580;r++)o[r]=0;for(r=103581;r<=103583;r++)o[r]=2;for(r=103595;r<=103694;r++)o[r]=0;for(r=103696;r<=103699;r++)o[r]=0;for(r=103700;r<=103793;r++)o[r]=2;for(r=103794;r<=103872;r++)o[r]=0;for(r=103900;r<=103971;r++)o[r]=2;return o}));
