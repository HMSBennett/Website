using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Website.Service {
    public class DevLogService {

        public List<string> GetLink() {
            List<string> temp = new List<string>();

            temp.Add("https://www.youtube.com/embed/C9oH60VlMX8");
            temp.Add("https://www.youtube.com/embed/C9oH60VlMX8");
            temp.Add("https://www.youtube.com/embed/C9oH60VlMX8");

            return temp;
        }
        public List<string> GetContent() {
            List<string> temp = new List<string>();
            
            temp.Add("I have just uploaded my first mechanic test of the Archery and Movement system to YouTube. Foundations have been set up to add different arrow support, implementation is needed however.");
            temp.Add("I have just uploaded my first mechanic test of the Archery and Movement system to YouTube. Foundations have been set up to add different arrow support, implementation is needed however.");
            temp.Add("I have just uploaded my first mechanic test of the Archery and Movement system to YouTube. Foundations have been set up to add different arrow support, implementation is needed however.");

            return temp;
        }
        public List<string> GetDate() {
            List<string> temp = new List<string>();

            temp.Add("-25/02/19");
            temp.Add("-25/02/19");
            temp.Add("-25/02/19");

            return temp;
        }

    }
}
