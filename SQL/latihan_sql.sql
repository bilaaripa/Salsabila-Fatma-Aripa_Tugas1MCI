--SALSABILA FATMA ARIPA--

--NO.1 
SELECT nama,ukt FROM `penugasan1.mci1.dataset`
ORDER BY ukt DESC;

--NO.2
SELECT nama,ukt FROM `penugasan1.mci1.dataset`
ORDER BY ukt DESC, nama;

--NO.3
SELECT COUNT(*) AS Jumlah_Mahasiswa FROM `penugasan1.mci1.dataset`  
WHERE ipk >= 3.5 AND semester = 8;

--NO.4
SELECT nama, ukt, 
CASE 
  WHEN ukt <= 1000000 THEN 'A'
  WHEN ukt > 1000000 AND ukt <= 2000000 THEN 'B'
  ELSE 'C'
END AS golongan
FROM `penugasan1.mci1.dataset`;

--NO.5
SELECT nama, semester, ipk 
FROM `penugasan1.mci1.dataset`s1
WHERE ipk = (SELECT MAX(ipk) FROM `penugasan1.mci1.dataset` s2 WHERE s1.semester = s2.semester)
ORDER BY semester ASC, nama ASC;