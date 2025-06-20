#include <QApplication>
#include <QWebEngineView>
#include <QUrl>
#include <QDir>

int main(int argc, char *argv[]){
    QApplication app(argc, argv);
    
    QWebEngineView view;

    view.load(QUrl("qrc:/DL.html"));
    
    view.show();

    return app.exec();
}